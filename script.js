
const classes = {
    info: '.Y8-fY .g47SY ', // li -> span (main information block)
    accounts: 'j6cq2', // Accounts div (modal window)
    account_href: '.FPmhX.notranslate.zsYNt ', // (link to the account from the modal window)
};
const info = document.querySelectorAll(classes.info);
const selected = prompt('1 - Followers \n2 - Following', 1) == 1 ? info[1] : info[2];

selected.click();

function scroll(div, callback) {
    if (document.querySelectorAll(classes.account_href).length >= Number(selected.innerHTML.replace(/ /g, ''))) {
        let accounts = document.querySelectorAll(classes.account_href);

        callback(Array.from(accounts).map(x => x.title));
    } else {
        div[0].scrollTop = div[0].scrollHeight;

        setTimeout(() => {
            scroll(div, callback);
        }, 500);
    }
}

function wait(className, callBack) {
    setTimeout(function() {
        let element = document.getElementsByClassName(className);
        if (element) {
            callBack(element);
        } else {
            wait(className, callBack);
        }
    }, 500);
}

wait(classes.accounts, (element) => {
    scroll(element, (accounts) => {
        console.log('%c%s', 'color: #0000FF; font-size:16px;', '-----');
        console.log('%c%s', 'color: #FC0FC0; font-size:16px;', `Total: ${accounts.length}`);
        console.log(accounts.join('\n'));
        console.log('%c%s', 'color: #0000FF; font-size:16px;', '-----');
    });
});
