import { gql, useQuery } from "@apollo/client";
import styles from "./GithubContributions.module.css";
import React from "react";

export const GithubContribution = () => {
    type ApiResponse = {
        user: {
            contributionsCollection: {
                contributionCalendar: {
                    totalContributions: number;
                    weeks: Weeks;
                };
            };
        };
    };

    type Weeks = [
        {
            contributionDays: [
                {
                    contributionCount: number;
                    date: string;
                }
            ];
        }
    ];

    const YEAR = new Date().getFullYear();

    const GET_USER_INFO = gql`
    query ($userName: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $userName) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }`;

    const { data, error, loading } = useQuery<ApiResponse>(GET_USER_INFO, {
        variables: {
            userName: process.env.NEXT_PUBLIC_GITHUB_ID,
            from: `${YEAR}-01-01T00:00:00`,
            to: `${YEAR}-12-31T23:59:59`,
        },
    });

    const contributionWeeks =
        loading || error
            ? []
            : [...data!.user.contributionsCollection.contributionCalendar.weeks];

    const colorJudge = (contributionCount: number) => {
        if (contributionCount === 0) {
            return styles.gray;  // 波動なし
        } else if (contributionCount <= 4) {
            return styles.light;  // 小さい波動
        } else if (contributionCount <= 9) {
            return styles.normal; // 中くらいの波動
        } else if (contributionCount <= 14) {
            return styles.dark;   // 大きい波動
        } else {
            return styles.black;  // 最大の波動
        }
    };


    return (
        <>
            {!error && (
                <div className={styles.github}>
                    <p className={styles.p}>
                        {loading
                            ? "Fetching your awesome contributions..."
                            : <>
                                <span className={styles.bold}>{data!.user.contributionsCollection.contributionCalendar.totalContributions}</span> amazing contributions in {YEAR}! 🎉 (from GitHub API)
                            </>}
                    </p>


                    <div className={styles.container}>
                        <div className={styles.grid}>
                            {loading ? (
                                <div className={styles.loading}></div>
                            ) : (
                                contributionWeeks.map((week, index) => {
                                    return (
                                        <div
                                            className={
                                                index === 0 ? styles.columnStart : styles.column
                                            }
                                            key={index}
                                        >
                                            {week.contributionDays.map((day) => {
                                                return (
                                                    <React.Fragment key={day.date}>
                                                        <div
                                                            className={`${styles.panel} ${colorJudge(
                                                                day.contributionCount
                                                            )}`}
                                                        ></div>
                                                    </React.Fragment>
                                                );
                                            })}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.svgIntro}>Less</div>
                            <div className={`${styles.panel} ${styles.gray}`}></div>
                            <div className={`${styles.panel} ${styles.light}`}></div>
                            <div className={`${styles.panel} ${styles.normal}`}></div>
                            <div className={`${styles.panel} ${styles.dark}`}></div>
                            <div className={`${styles.panel} ${styles.black}`}></div>
                            <div className={styles.svgIntro}>More</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};