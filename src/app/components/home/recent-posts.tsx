import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Post } from '../../../../models';

export function RecentPosts () {
    const postList: Post[] = [{
        id: '1',
        title: 'Making a design system from scratch',
        publishedDate: '1736480384948',
        tagList: ['Design', 'Pattern'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        id: '2',
        title: 'Creating pixel perfect icons in Figma',
        publishedDate: '1736480384948',
        tagList: ['Figma','Icon Design'],
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    }]
  return (
    <Box component={'section'} pt={2} pb={4} sx={{backgroundColor: 'secondary.light'}}>
        <Container>
            <Stack direction={'row'} justifyContent={{ xs: 'center', md: 'space-between'}} mb={2} alignItems={'center'}>
                <Typography variant='h5'>Recent posts</Typography>

                <Link href={'/blog'}>
                    <MuiLink sx={{display: {xs: 'none', md: 'inline'}}}>View all</MuiLink>
                </Link>
            </Stack>
            <Stack direction={{
                xs: 'column',
                md: 'row'
            }} 
                spacing={4}
                sx={{
                    '& > div': {
                        width: {
                            xs: '100%',
                            md: '50%',
                        },
                    },
                }}>

                {postList.map((post) => (
                    <Box key={post.id}>
                        <PostCard post = {post}/>
                    </Box>
                ))}
            </Stack>
        </Container>
    </Box>
  );
}
