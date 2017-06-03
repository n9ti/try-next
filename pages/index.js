import Head from 'next/head'

const Page = ({pathname, query}) => (
  <div>
    <Head>
      <title>PairHub</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <hr/>
    <pre>{JSON.stringify(pathname)}</pre>
    <pre>{JSON.stringify(query)}</pre>
  </div>
)

Page.getInitialProps = async ({pathname, query}) => {
  return {
    pathname,
    query
  }
}

export default Page
