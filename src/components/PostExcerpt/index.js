import React from 'react';
import { Link } from 'react-router-dom';
import dateFormatter from '../../utils/dateFormatter';
import './PostExcerpt.css';

export default ({ post }) => (
  <div>
    <h2 className="article-excerpt">
      <Link to={post.slug}>{post.title}</Link>
    </h2>
    <p className="date">{dateFormatter(new Date(post.date))}</p>
    <p className="article-read-time">
      {`${Math.ceil(post.content.split(' ').length / 200)} minutes to read`}
    </p>
    <p>{post.excerpt}</p>
  </div>
);
