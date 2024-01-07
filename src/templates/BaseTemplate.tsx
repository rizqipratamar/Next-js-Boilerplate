/* eslint-disable react/no-unused-prop-types */
import { useTranslations } from 'next-intl';
import { type ReactNode } from 'react';

import { CircleIndicator } from '@/components/framer/indicator';
import { AppConfig } from '@/utils/AppConfig';

import { MainNav } from './main-nav';

type IBaseTemplateProps = {
  children: ReactNode;
};

const BaseTemplate = (props: IBaseTemplateProps) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="fixed top-0 z-50 w-full border-b backdrop-blur-xl">
        <div className="flex h-12 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4" />
        </div>
      </div>

      <div className="mx-auto mt-16">
        <main>{props.children}</main>
        <CircleIndicator />

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
          {` ${t('made_with')} `}
          <a
            href="https://creativedesignsguru.com"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            CreativeDesignsGuru
          </a>
          .
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
