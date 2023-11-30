// export an async GET function. This is a convention in NextJS
export async function GET({ params }) {
  // filename for the file that the user is trying to download
  console.log("First");

  // external file URL
  const DUMMY_URL =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  // use fetch to get a response
  //   const response = await fetch(DUMMY_URL);

  // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
  return new Response(response.body, {
    headers: {
      ...response.headers, // copy the previous headers
    },
    body: "ff",
  });
}
