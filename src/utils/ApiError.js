class ApiError extends Error {
    construction (
        statusCode,
        message= " SomeThing went Wrong",
        errror = [],
        statck = ""
    ) {
        super(message)
        this.stsatusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors
    }
}
export default ApiError