import React from 'react';
import { Helmet } from 'react-helmet';
import { appName } from 'config';

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
