import { useEffect } from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { GeneralPosts } from '../../components/GeneralPosts';

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Posts - Endryus Daniel';
  }, []);

  return (
    <DefaultTemplate>
      <GeneralPosts />
    </DefaultTemplate>
  );
}
