if (window) {
    window.onerror = ErrorCatch;
}

/**
 *
 * @param errorMessage 异常信息
 * @param scriptURI 异常文件路径
 * @param lineNo 异常行号
 * @param columnNo 异常行号
 * @param error 异常列号
 */
function ErrorCatch(errorMessage: string, scriptURI: string, lineNo: string | number, columnNo: string | number, error: any) {
    console.log('errorMessage: ' + errorMessage); // 异常信息
    console.log('scriptURI: ' + scriptURI); // 异常文件路径
    console.log('lineNo: ' + lineNo); // 异常行号
    console.log('columnNo: ' + columnNo); // 异常列号
    console.log('error: ' + error); // 异常堆栈信息
}