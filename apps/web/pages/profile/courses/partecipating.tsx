import Head from 'next/head'
import {Layout} from '@dae/ui'
import NextLink from 'next/link'
import {Stack, Tabs, TabList, Tab, Link, Box} from '@chakra-ui/react'

export default function AddCoursePage() {
  return (
    <>
      <Head>
        <title>Partecipating Courses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Profile heading="Partecipating">
        <Stack spacing={8}>
          <Tabs defaultIndex={1}>
            <TabList>
              <Link as={NextLink} href="/profile/courses/teaching" style={{textDecoration: 'none'}}>
                <Tab>Teaching</Tab>
              </Link>
              <Tab>Partecipating</Tab>
              <Link as={NextLink} href="/profile/courses/create" style={{textDecoration: 'none'}}>
                <Tab>Create</Tab>
              </Link>
            </TabList>
          </Tabs>
          <Box>My courses</Box>
        </Stack>
      </Layout.Profile>
    </>
  )
}
