import React from 'react';
import { Helmet } from 'react-helmet';

type DocumentTitleProps = {
  /**
   * The title of the specific page being rendered
   */
  pageTitle?: string;
};

export const DocumentTitle: React.FunctionComponent<DocumentTitleProps> = ({
  pageTitle,
}: DocumentTitleProps) => {
  /**
   * The name of the app, defined in .env
   */
  const appName = process.env.REACT_APP_TITLE || '';

  /**
   * The title to be displayed in the document head
   */
  const title: string = pageTitle ? `${pageTitle} | ${appName}` : appName;

  /**
   * Retern the react-helmet component
   */
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
