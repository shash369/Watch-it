class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
        this.success = false;   // Typo fixed from `sucess` to `success`
        this.data = null;
        this.error = error;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
