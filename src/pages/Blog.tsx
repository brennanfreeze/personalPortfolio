/* eslint-disable react/no-unescaped-entities */
import { Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BasicLayout from '../components/BasicLayout';
import BlogCard from '../components/BlogCard';
import getBlogs, { BlogPost } from '../firebase/getBlogs';

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchBlogPosts = async (): Promise<void> => {
    const posts = await getBlogs();
    setBlogPosts(posts);
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <>
      <BasicLayout />
      <Stack alignItems="center">
        <Stack alignItems="center" spacing={4}>
          <Typography
            textAlign="center"
            variant="h2"
            component="h1"
            marginTop={{ xs: 15, sm: 15, md: 20, lg: 20 }}
            sx={{
              fontFamily: 'Lato, sans-serif',
              backgroundColor: 'primary.main',
              background:
                '-webkit-linear-gradient(220deg, #ce40ad 10%, #4b70dd 80%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
            }}
          >
            Explore what I'm up to.
          </Typography>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            sx={{
              fontWeight: 500,
              width: { xs: '275px', sm: '500px', md: '600px', lg: '650px' },
              height: '10%',
              fontFamily: 'Lato, sans-serif',
            }}
          >
            Here, I share practical knowledge and insights on programming
            languages, frameworks, and explore the transformative potential of
            software engineering in real-world applications.
          </Typography>
          <TextField
            autoComplete="off"
            sx={{
              backgroundColor: '#08050f',
              border: 'solid white 2px',
              borderRadius: '50px',
              marginTop: 5,
              color: 'white',
              width: { xs: '280px', sm: '450px' },
              '& .MuiInputBase-root': {
                '& input': {
                  color: 'white',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
              },
              '& input::placeholder': {
                color: 'white',
                opacity: 0.5,
                fontFamily: 'Lato, sans-serif',
                fontWeight: 'bold',
              },
            }}
            placeholder="Search"
            inputProps={{ maxLength: 40, style: { color: 'white' } }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Stack>
        <Grid
          spacing={4}
          container
          width="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignContent="space-around"
          marginTop={3}
          marginBottom={10}
        >
          {blogPosts
            .filter((post) => {
              const lowerCaseSearchValue = searchValue.toLowerCase();
              return (
                post.title.toLowerCase().includes(lowerCaseSearchValue) ||
                post.tags.some((tag) =>
                  tag.toLowerCase().includes(lowerCaseSearchValue)
                ) ||
                post.content.toLowerCase().includes(lowerCaseSearchValue)
              );
            })
            .map((post) => (
              <BlogCard
                key={post.title}
                title={post.title}
                date={post.published.toDate().toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
                tech={post.tags.join(', ')}
                content={post.content.replace(/\n/g, '<br>')}
              />
            ))}
        </Grid>
      </Stack>
    </>
  );
};

export default Blog;
