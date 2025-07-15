import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gitlab CBSC',
    Svg: require('@site/static/img/gitlab.svg').default,
      link: 'https://cbsc-git-repo.collega.co.id/',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Wiki',
    Svg: require('@site/static/img/wiki.svg').default,
      link:'http://192.168.212.195:3000/',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Nexus Repo',
    Svg: require('@site/static/img/nexus.svg').default, link:'http://192.168.212.42:8081',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
    {
        title: 'Komodo',
        Svg: require('@site/static/img/komodo.svg').default, link:'http://192.168.212.43:9120/',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'MinIO',
        Svg: require('@site/static/img/minio.svg').default, link:'http://192.168.212.43:9001/',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'Waha',
        Svg: require('@site/static/img/waha.svg').default, link:'http://192.168.212.43:3033/',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'Kibana',
        Svg: require('@site/static/img/kibana.svg').default, link:'http://192.168.212.125:5601/',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'Excalidraw',
        Svg: require('@site/static/img/excalidraw.svg').default, link:'http://192.168.212.43:5000/',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'MailDev',
        Svg: require('@site/static/img/mail.svg').default, link:'http://192.168.212.26:1080/',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'N8N',
        Svg: require('@site/static/img/n8n.svg').default, link:'http://192.168.212.25:5678/',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'RSA',
        Svg: require('@site/static/img/rsa.svg').default, link:'http://192.168.212.124:3411/RsaUtilWebUI',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">

        <a href={link} target='_blank' ><Heading as="h3">{title}</Heading></a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
