import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';

export function RecentPosts () {
  return (
    <Box component={'section'} pt={2} pb={4} sx={{backgroundColor: 'secondary.light'}}>
        <Container>
            <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
                <Typography>Recent posts</Typography>

                <Link href={'/blog'}>
                    <MuiLink>View all</MuiLink>
                </Link>
            </Stack>
            <Stack direction={'row'} 
                spacing={4}
                sx={{
                    '& > div': {
                        width: {
                            xs: '100%',
                            md: '50%',
                        },
                    },
                }}>
                <Box>
                    <PostCard/>
                </Box>
                <Box>
                    <PostCard/>
                </Box>
            </Stack>
        </Container>
    </Box>
  );
}
