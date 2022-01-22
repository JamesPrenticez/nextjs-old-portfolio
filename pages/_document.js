
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body className="font-roboto text-lg text-white selection:bg-green-600 bg-[#021019]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument