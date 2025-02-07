import { ReactElement } from 'react';
import ReactAvatar from 'react-avatar';

export const Avatar = ({ author }: { author: any }): ReactElement => {
  return (
    <ReactAvatar
      round
      githubHandle={author.github}
      twitterHandle={author.twitter}
      size="40"
      title={author.name}
      alt={author.name}
    />
  );
};
