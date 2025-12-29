import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import BigInteractiveIVSDashboard from './dashboards/BigInteractiveIVSDashboard';

export default function Home() {
  return (
    <Layout
      title="AlphaBuilder"
      description="A modular research framework for signal, risk, and portfolio optimization."
    >
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <h1 className={styles.title}>AlphaBuilder</h1>
<p className={styles.subtitle}>
  AlphaBuilder is a research-driven SaaS platform for portfolio optimization and systematic rebalancing. 
  It transforms quantitative signals into optimized portfolios by combining regime-aware risk modeling, 
  constraint-based optimization, and rigorous backtesting. 
  The platform is designed to evaluate how portfolios behave across changing volatility and correlation regimes, 
  enabling disciplined allocation, rebalancing, and index-tracking decisions. 
  AlphaBuilder emphasizes transparency and reproducibility, allowing strategies, risk models, and optimization 
  choices to be tested, compared, and refined before deployment.
</p>

          <div className={styles.buttons}>
              <a
                className={styles.button}
                href="https://app.alphabuilder.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </a>

            <Link className={styles.button} to="/community/learn_more">
              Learn More
            </Link>
          </div>
        </section>

        {/* MODULE OVERVIEW */}
        <section className={styles.modules}>
          <h2>Documentation Modules</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Signal Lab</h3>
              <p>
                Extracts predictive structure from time-series data using HMMs, SSMs, and Transformer architectures for
                regime detection, volatility tracking, and alpha generation.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Risk Engine</h3>
              <p>
                Models market uncertainty with regime-conditional volatility, drawdown, and VaR estimation. Supports
                stress-testing and dynamic tail-risk assessment.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Optimizer</h3>
              <p>
                Adaptive portfolio optimization under dynamic, non-convex, and multi-objective settings using
                metaheuristic and hybrid optimization algorithms.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Backtest</h3>
              <p>
                A validation framework for signal-driven and optimized portfolios, supporting 
                realistic rebalancing, transaction costs, and out-of-sample performance analysis.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Research</h3>
              <p>
                A curated research hub publishing working papers, collaborative studies, and 
                peer-reviewed methods underlying signals, risk models, and 
                optimization frameworks.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Application</h3>
              <p>
                System-level documentation covering orchestration, data pipelines, model integration,
                experiment tracking, and portfolio rebalancing workflows across AlphaBuilder components.
              </p>
            </div>
          </div>
        </section>
        <BigInteractiveIVSDashboard />
      </main>
    </Layout>
  );
}
