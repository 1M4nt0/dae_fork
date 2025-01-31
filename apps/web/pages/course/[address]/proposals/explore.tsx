import Head from 'next/head'
import { Address } from 'wagmi'
import { Layout, ProposalContainer } from '@dae/ui'
import { useRouter } from 'next/router'
import { Stack, Tabs, TabList, Tab, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ProposalRowList } from '@dae/ui'
import withCourseRoleAuth from '../../../../components/HOC/withCourseRole'

function ExploreProposals() {
  const router = useRouter()
  const status = router.query.status as 'active' | 'closed'
  const courseAddress = router.query.address as Address

  return (
    <>
      <Head>
        <title>Proposals | DAE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Course heading="Explore proposals">
        <ProposalContainer courseAddress={courseAddress}>
          <Stack spacing={8}>
            <Tabs index={status === 'active' ? 0 : 1}>
              <TabList>
                <Link
                  as={NextLink}
                  href={`/course/${router.query.address}/proposals/explore?status=active`}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Tab>Active</Tab>
                </Link>
                <Link
                  as={NextLink}
                  href={`/course/${router.query.address}/proposals/explore?status=closed`}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Tab>Closed</Tab>
                </Link>
              </TabList>
            </Tabs>
            <ProposalRowList courseAddress={courseAddress} status={status} />
          </Stack>
        </ProposalContainer>
      </Layout.Course>
    </>
  )
}

export default withCourseRoleAuth(ExploreProposals, 'DISCIPULUS')
