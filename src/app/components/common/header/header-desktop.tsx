'use client'
import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation'

export function HeaderDesktop () {
    const pathName = usePathname();
  return (
    <Box display={{xs : 'none', lg : 'block'}} py={2}>
        <Container maxWidth ='md'>
            <Stack direction={'row'} justifyContent={'flex-end'}>
                {
                    ROUTE_LIST.map(route => (
                        <Link href={route.path} key={route.path} passHref>
                            <MuiLink 
                            sx={{ml: 2 , fontWeight: 'medium'}} 
                            className={clsx({active: pathName === route.path})}>
                                {route.lable}
                            </MuiLink>
                        </Link>
                    ))
                }
            </Stack>
        </Container>
    </Box>
  );
}
