const initialState = {
    options: [
        {
            select: "keo",
            img: ".././img/keo.png",
            isChoose: true,
        },

        {
            select: "bua",
            img: ".././img/bua.png",
            isChoose: false,
        },

        {
            select: "bao",
            img: ".././img/bao.png",
            isChoose: false,
        },
    ],

    result: "I'm iron man, i love you 3000 !!!",
    wins: 0,
    total: 0,
    computer: { select: "keo", img: ".././img/keo.png", isChoose: true },
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_OPTION": {
            // copy [] options trong state
            let options = [...state.options];

            options = options.map((option) => {
                // Nếu option.select === option dc chọn từ player
                // Gán isChoose = true cho option đó
                if (option.select === action.payload.select) {
                    return { ...option, isChoose: true };
                }

                // Giữ lại tất cả giá trị của option đó
                // update thuộc tính isChoose = false
                return { ...option, isChoose: false };
            });

            // Gán lại giá trị cho [] options
            state.options = options;

            return { ...state };
        }

        case "RANDOM": {
            let computer = { ...state.computer };

            // Random [0, 2]
            const index = Math.floor(Math.random() * 3);

            if (index >= 0 && index < 3) {
                // Gán lại giá trị cho obj computer
                computer = state.options[index];

                // Update lại giá trị cho obj computer trong state
                state.computer = computer;
            }

            return { ...state };
        }

        case "END_GAME": {
            let player = state.options.find((option) => {
                return option.isChoose === true;
            });

            let computer = state.computer;

            switch (player.select) {
                case "keo":
                    if (computer.select === "keo") {
                        state.result = "Bạn đã hòa !!!";
                    } else if (computer.select === "bao") {
                        state.result = "I'm iron man, i love you 3000 !!!";
                        state.wins += 1;
                    } else {
                        state.result = "Bạn đã thua !!!";
                    }

                    break;

                case "bua":
                    if (computer.select === "bua") {
                        state.result = "Bạn đã hòa !!!";
                    } else if (computer.select === "keo") {
                        state.result = "I'm iron man, i love you 3000 !!!";
                        state.wins += 1;
                    } else {
                        state.result = "Bạn đã thua !!!";
                    }

                    break;

                case "bao":
                    if (computer.select === "bao") {
                        state.result = "Bạn đã hòa !!!";
                    } else if (computer.select === "bua") {
                        state.result = "I'm iron man, i love you 3000 !!!";
                        state.wins += 1;
                    } else {
                        state.result = "Bạn đã thua !!!";
                    }

                    break;

                default:
                    state.result = "I'm iron man, i love you 3000 !!!";
            }

            state.total += 1;

            return { ...state };
        }

        default:
            return { ...state };
    }
};

export default gameReducer;
