import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Work } from '../../../../models';
import { WorkList } from '../work';

export function FeatureWorks () {
    const workList: Work[] = [{
        id: '1',
        title: 'Designing Dashboards',
        createAt: '1736480384948',
        tagList: ['Dashboard'],
        shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        fullDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        updateAt: '1736480384948',
        thumbnaiUrl: 'https://res.cloudinary.com/dumogx8al/image/upload/v1736520238/Rectangle_30_rokcus.jpg'
    },
    {
        id: '2',
        title: 'Vibrant Portraits of 2020',
        createAt: '1736480384948',
        tagList: ['Illustration'],
        shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        fullDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        updateAt:'1736480384948',
        thumbnaiUrl: 'https://res.cloudinary.com/dumogx8al/image/upload/v1736520238/Rectangle_34_sqbjld.jpg'
    },
    {
        id: '3',
        title: '36 Days of Malayalam type',
        createAt: '1736480384948',
        tagList: ['Typography'],
        shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        fullDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        updateAt:'1736480384948',
        thumbnaiUrl: 'https://res.cloudinary.com/dumogx8al/image/upload/v1736520238/Rectangle_32_lk62jz.jpg'
    }]
  return (
    <Box component={'section'} pt={2} pb={4}>
        <Container>
            <Typography variant='h5'>Feature Works</Typography>
            <WorkList workList={workList}/>
        </Container>
    </Box>
  );
}
