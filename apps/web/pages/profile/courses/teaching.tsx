import Head from 'next/head'
import {Layout} from '@dae/ui'
import NextLink from 'next/link'
import {CourseCard} from '@dae/ui'
import {SimpleGrid, Stack, Tabs, TabList, Tab, Link} from '@chakra-ui/react'
import {GetServerSideProps} from 'next'
import {getTeacherCourses} from '../../../lib/api'
import {getSession} from 'next-auth/react'
import {useNetwork} from 'wagmi'

export default function AddCoursePage({courses}: {courses: any[]}) {
  const {chain, chains} = useNetwork()
  return (
    <>
      <Head>
        <title>My courses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.Profile heading="Teaching">
        <Stack spacing={8}>
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab>Teaching</Tab>
              <Link
                as={NextLink}
                href={`/profile/courses/partecipating?chainId=${chain ? chain.id : chains[0].id}`}
                style={{textDecoration: 'none'}}
              >
                <Tab>Partecipating</Tab>
              </Link>
              <Link as={NextLink} href="/profile/courses/create" style={{textDecoration: 'none'}}>
                <Tab>Create</Tab>
              </Link>
            </TabList>
          </Tabs>
          {courses.length === 0 ? (
            <p>No courses</p>
          ) : (
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} spacing={8}>
              {courses.map((course: any) => {
                return <CourseCard data={course} key={course.address} />
              })}
            </SimpleGrid>
          )}
        </Stack>
      </Layout.Profile>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{courses: any[]}> = async (context) => {
  const {chainId} = context.query as {address: string; chainId: string}
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }

  if (!chainId) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile',
      },
      props: {},
    }
  }

  try {
    const data = await getTeacherCourses(session!.user.address, parseInt(chainId))
    return {
      props: {
        courses: data,
      },
    }
  } catch (_e) {
    return {
      notFound: true,
    }
  }
}
