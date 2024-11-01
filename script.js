function countFunc() {
    let cnt = 0;
    function continueCount() {
        cnt += 1;
        return cnt;
    }
    function resetCount() {
        cnt = 0;
    }
    return { count: continueCount, reset: resetCount };
}

let totalCount = countFunc();

function countResult() {
    document.getElementById("countValue").innerHTML = totalCount.count();
}

function resetFunc() {
    totalCount.reset();
    document.getElementById("countValue").innerHTML = 0;
}