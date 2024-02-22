export default {
    root: true,
    extends: "next/core-web-vitals",
    rules: {
        "no-unused-vars" : [
            "error",
            {
                varsIgnorePattern : "^_",
                argsIgnorePattern : "^_",
            }
        ] 
    }
}