import React from 'react';

export const Promise1 = () => {

    let axios = {
        get() {
            let pr = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(undefined)
                }, 3000)

            })
        }
    }

    // @ts-ignore

    console.log(axios.get())
    return (
        <div>
            adw
        </div>
    );
};

