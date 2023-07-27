import { FC } from 'react'
import Head from 'next/head'
import { Box, Stack, Text, Image, Center } from '@chakra-ui/react'
import { Layout } from '@dae/ui'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home | DAE</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout.Page>
        <Center>
          <Stack
            width={{ md: '100vw', base: 'unset' }}
            height={{ md: 'calc(100vh - 80px)', base: 'unset' }}
            direction={{ md: 'row', base: 'column' }}
            spacing={2}
            align={'center'}
            justify={'center'}
            overflowY={'auto'}
          >
            <Box
              width={{ md: '30%', sm: 0 }}
              padding={'30px'}
              minW={{ md: '350px', base: 'unset' }}
            >
              <Image src='/dae-home-image.jpg' borderRadius={'lg'} />
            </Box>
            <Box
              width={{ md: '30%', sm: 0 }}
              padding={'30px'}
              minW={{ md: '350px', base: 'unset' }}
            >
              <Stack spacing={8}>
                <Text fontSize={'4xl'} fontWeight={'bold'}>
                  Decentralized Autonomous Education
                </Text>
                <Stack spacing={4} fontSize={'lg'}>
                  <Text>
                    It is an innovative learning model that leverages the
                    principles and applications of Web3.
                  </Text>
                  <Text>
                    An instance of the DAE model, called a class, is made of a
                    group of teachers (at least one), a group of learners (at
                    least two), and a topic to teach and learn.
                  </Text>
                  <Text>
                    The purpose of the model is to maximize the transfer of
                    knowledge about the topic from the teacher to the learners
                    in a homogeneous way, i.e. without many disparities.
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Center>
      </Layout.Page>
    </>
  )
}

export default Home
