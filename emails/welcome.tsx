import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
  Preview,
} from '@react-email/components';

import { artist } from '@/lib/data';

export default function WelcomeToThePack() {
  const {
    name: artistName,
    siteUrl,
    latest_release_link: listenUrl,
  } = artist;

  return (
    <Html>
      <Head />
      <Preview>
        Welcome to the ii6 Pack — early drops & exclusives inside
      </Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* ───────── Header ───────── */}
          <Section style={styles.header}>
            <Heading style={styles.logo}>
              {artistName}
            </Heading>
          </Section>

          {/* ───────── Main ───────── */}
          <Section style={styles.main}>
            <Heading style={styles.title}>
              You’re officially in.
            </Heading>

            <Text style={styles.text}>
              Welcome to the <strong>ii6 Pack</strong>.
              <br />
              Early releases, exclusive drops, and behind-the-scenes
              moments straight to you.
            </Text>

            <Link
              href={listenUrl ?? siteUrl}
              style={styles.cta}
            >
              Listen now
            </Link>

            <Text style={styles.subtle}>
              No spam. No noise. Just music.
            </Text>
          </Section>

          {/* ───────── Footer ───────── */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} {artistName}. All rights reserved.
            </Text>

            <Text style={styles.footerText}>
              <Link
                href={`${siteUrl}/privacy`}
                style={styles.footerLink}
              >
                Privacy
              </Link>
              {' · '}
              <Link
                href={`${siteUrl}/terms`}
                style={styles.footerLink}
              >
                Terms
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/* ---------------- styles ---------------- */

const styles = {
  body: {
    backgroundColor: '#0b0b0b', // --main-clr
    margin: 0,
    padding: 0,
    fontFamily:
      '"Geist Mono", -apple-system, BlinkMacSystemFont, Inter, Segoe UI, Helvetica, Arial, sans-serif',
  },

  container: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '56px 28px',
    backgroundColor: '#7f0f12',
  },

  /* Header */
  header: {
    textAlign: 'center' as const,
    marginBottom: '56px',
  },

  logo: {
    fontSize: '34px',
    fontWeight: 800,
    letterSpacing: '-0.04em',
    color: '#ffffff',
    margin: 0,
    fontFamily:
      '"Rock Salt", -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, cursive',
  },

  /* Main */
  main: {
    textAlign: 'center' as const,
  },

  title: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '18px',
    letterSpacing: '-0.02em',
  },

  text: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#f5f5f5', // --body-clr
    maxWidth: '420px',
    margin: '0 auto 36px',
  },

  cta: {
    display: 'inline-block',
    padding: '14px 30px',
    backgroundColor: '#0b0b0b', // --main-clr
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    borderRadius: '2px',
  },

  subtle: {
    marginTop: '26px',
    fontSize: '11px',
    color: '#f1cfcf',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  },

  /* Footer */
  footer: {
    marginTop: '80px',
    textAlign: 'center' as const,
  },

  footerText: {
    fontSize: '11px',
    color: '#f1cfcf',
    margin: '6px 0',
  },

  footerLink: {
    color: '#ffffff',
    textDecoration: 'underline',
  },
};
