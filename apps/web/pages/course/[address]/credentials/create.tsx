import Head from 'next/head'
import { Layout, CreateCredentialsForm } from '@dae/ui'
import { Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Address } from 'viem'
import withCourseRoleAuth from '../../../../components/HOC/withCourseRole'

function CreateCredential() {
  const router = useRouter()
  const courseAddress = router.query.address as Address

  return (
    <>
      <Head>
        <title>Credentials | DAE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Course heading="Create credential">
        <Stack spacing={8}>
          <CreateCredentialsForm courseAddress={courseAddress} />
        </Stack>
      </Layout.Course>
    </>
  )
}

export default withCourseRoleAuth(CreateCredential, 'MAGISTER')
