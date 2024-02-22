export const POST = async (request) => {
    console.log(request);
    return new Response(request.body)
}