import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const TagList = (props) => {
  return (
    <div className={`tag-list ${props.className || ''}`} style={props.style}>
      {props.tags.map((tag) => (
        <Link href={'/'} passHref key={tag}>
          <a
            className={`tag-pill tag-default ${
              !props.outline === 'secondary' || 'tag-outline'
            }`}
          >
            {tag}
          </a>
        </Link>
      ))}
    </div>
  );
};
TagList.propTypes = {
  tags: PropTypes.oneOf(PropTypes.object),
  variant: PropTypes.arrayOf(['primary', 'secondary']),
};

TagList.defaultProps = {
  tags: [],
  outline: 'primary',
};

export default TagList;
