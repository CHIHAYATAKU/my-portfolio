"use client";

import React, { useEffect, useState } from 'react';
import styles from "./Footer.module.css";
import Link from 'next/link';
import gitlogo from "./Footer_images/git_logo_bottom.svg";
import instalogo from "./Footer_images/insta_logo_bottom.svg";
import Image from 'next/image';
import { MENU_ITEMS } from 'app/_utils/Menu_Items';
import client from '@/lib/apollo/apollo-client';
import { gql } from "@apollo/client";

const Footer = () => {
    const [contributions, setContributions] = useState<number>(0); // コントリビューションの数を格納するステート

    useEffect(() => {
        (async () => {
            try {
                const { data } = await client.query({
                    query: gql`
                        query GetContributions($login: String!) {
                          user(login: $login) {
                            contributionsCollection {
                              contributionCalendar {
                                totalContributions
                              }
                            }
                          }
                        }
                    `,
                    variables: { login: "CHIHAYATAKU" } // ユーザー名を変数として渡す
                });

                // ネストされたデータから `totalContributions` を取得
                const totalContributions = data.user.contributionsCollection.contributionCalendar.totalContributions;
                console.log(totalContributions);
                setContributions(totalContributions);
            } catch (error) {
                console.error("Failed to fetch contributions:", error);
            }
        })();
    }, []);

    return (
        <footer id={styles.footer}>
            <div className={styles.container}>
                <h3>Contributions: {contributions}</h3>
                <div className={styles.menu}>
                    <p className={styles.p}>MENU</p>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            {MENU_ITEMS.map((item) => (
                                <li key={item.href} className={styles.li}>
                                    <Link href={item.href} className={styles.link}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={styles.sns}>
                    <a className={styles.a} href="https://github.com/CHIHAYATAKU">
                        <Image id={styles.gitlogo} src={gitlogo} alt="Github" />
                    </a>
                    <Image id={styles.instalogo} src={instalogo} alt="qiitaに変えたい" />
                </div>
                <p id={styles.copy}>&copy;2024 Takuma Chihaya.</p>
            </div>
        </footer>
    );
};

export default Footer;
