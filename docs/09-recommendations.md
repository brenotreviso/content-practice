# 9 · How recommendations actually work

> **In one sentence:** these systems usually guess which post you will spend time on or act on, from a shortlist of candidates, and each platform’s public account of that process is a little different.

If you only remember one thing: **you cannot “hack” a secret score, but you can make something a real person would stay for.** The official documents below are the base. Unofficial “algorithm decoded” posts are not.

## New words

| Word | Plain meaning |
|---|---|
| **Candidate generation** | First the system gathers a pool of posts you *might* see. |
| **Ranking** | Then it orders that pool, often by predicted actions. |
| **Predicted action** | A guess at the chance you will watch, like, share, skip, or hide. |
| **Satisfaction** | YouTube’s word for whether a view was actually worthwhile, not only long. |
| **Surface** | Where the recommendation appears (For You, Home, Explore, Search, Following). |

## The shared idea, in plain language

A lot of modern recommenders look like this:

1. Gather many possible posts (from people you follow, and from people you do not).
2. Guess, for each post, how you will react.
3. Combine those guesses into a score.
4. Apply rules (diversity, safety, “not two of the same thing in a row”).
5. Show you the top of the list.

A well-known published example of this two-stage shape, for an older version of YouTube, is Covington, Adams and Sargin, [Deep Neural Networks for YouTube Recommendations](https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/) (2016). It is a research paper about a system from that time, not a manual for your account today.

The older family of methods often taught in class is **collaborative filtering** and **matrix factorisation** — inferring taste from patterns of what similar people did. A classic survey is Koren, Bell and Volinsky, [Matrix Factorization Techniques for Recommender Systems](https://doi.org/10.1109/MC.2009.263) (*IEEE Computer*, 2009; also [IEEE Xplore 5197422](https://ieeexplore.ieee.org/document/5197422)).

ByteDance researchers later published [Monolith: Real Time Recommendation System With Collisionless Embedding Table](https://arxiv.org/abs/2209.07663) (2022), about a real-time training system. That paper is about infrastructure, not a “TikTok growth” recipe.

You do not need to implement any of this. You do need to know that **“the algorithm” is usually several models and rules, not one mood.**

## YouTube

Official Help: [How YouTube recommendations work](https://support.google.com/youtube/answer/16089387?hl=en) and [YouTube’s Recommendation System](https://support.google.com/youtube/answer/16533387?hl=en). Official site: [How YouTube works — recommendations](https://www.youtube.com/howyoutubeworks/recommendations/). Official blog: Cristos Goodrow, [On YouTube’s recommendation system](https://blog.youtube/inside-youtube/on-youtubes-recommendation-system/).

Signals named in Help include watch history, search history, subscriptions, likes, dislikes, “Not interested”, “Don’t recommend channel”, and satisfaction surveys. The homepage, Up Next and the Shorts feed are different surfaces. Goodrow’s post, and later official talks, emphasise **satisfaction**, not only watch time: a longer watch is not automatically a better one.

Search is a different system again: [How YouTube search works](https://support.google.com/youtube/answer/16090438?hl=en) names relevance, engagement and quality.

**For a beginner:** make a video a real person would finish and feel was as promised. Packaging (chapter 8) helps a stranger choose it. Series and clear topics help people who already like you find the next one. Upload time is not a magic lever; official materials have said long-term performance is about viewers, not about posting at a “secret hour”.

## Instagram

Official: [Instagram Ranking Explained](https://about.instagram.com/blog/announcements/instagram-ranking-explained). Official Help on recommended reels: [What kind of reels you may see](https://help.instagram.com/1525585517644948). Official transparency: [Instagram Reels Chaining](https://transparency.meta.com/features/explaining-ranking/ig-reels-chaining/).

Instagram has said it does not have one algorithm. Feed, Stories, Explore and Reels are ranked differently. For Reels, the 2023 ranking explainer lists predictions such as whether you will reshare, watch through, like, or go to the audio page, and signals such as your recent activity and information about the reel. The Help page lists kinds of reels that may be shown less often (including low quality, watermarks, and mostly-text frames).

**Trial Reels** are a testing tool, not a separate algorithm you must “beat”. Official Help: [About trial reels](https://help.instagram.com/1013292530224018/). Official creator post: [Trial reels](https://creators.instagram.com/blog/instagram-trial-reels). Eligibility, as of the Help page we opened: a **public** account; **200+ followers** if it is a professional (business or creator) account, or **1,000+** if it is a personal account; and the account must be eligible for recommendations. A trial can be shown to non-followers first. Recheck the snapshot if those numbers change.

Adam Mosseri’s public videos can be useful *when they match Help Centre language*. Prefer the Help Centre if the two ever differ.

## TikTok

Official: [How TikTok recommends videos #ForYou](https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you), [Introduction to the recommendation system](https://www.tiktok.com/safety/en/policies-and-engagement/recommendation-system), and [Creator Academy: Decoding the recommendation system](https://www.tiktok.com/creator-academy/article/decoding-tiktok-recommendation-system).

TikTok describes user interactions, video information (captions, sounds, hashtags), and lower-weighted device or setting factors, then ranking, a similarity check so you do not see too many similar videos in a row, and extra rules (for example around age and region). Follower count is not described there as a direct ranking factor. New videos still have to pass moderation before they can be recommended.

## X

The current public code for the For You feed is [github.com/xai-org/x-algorithm](https://github.com/xai-org/x-algorithm/) (created 19 January 2026, Apache-2.0; later expanded, including in August 2026). The README describes in-network posts (from accounts you follow) and out-of-network posts, filtered and ranked together. A model (Phoenix, in the documentation we opened) predicts probabilities of actions; `RankingScorer` combines them as a weighted sum.

**A misconception the repository itself warns about:** the weights multiply *predicted probabilities* (or related predicted values), **not** raw counts. You cannot read them as “one report cancels N likes”. Always prefer the README’s own wording when you teach this.

An older 2023 dump, [github.com/twitter/the-algorithm](https://github.com/twitter/the-algorithm), is historical context, not the current system.

## What this means for Maya — and for you

Maya’s quiet first posts were not a moral verdict. They were, at most, a small amount of data. Her job is: a clear promise, a watchable middle, an honest ending, on one platform, repeated. The systems above are trying to predict whether *someone* will find that worth their time.

## Exercise

Pick the one platform you posted to. Read only the official page for that platform linked above. Write five lines: “This system seems to care about… Therefore I will… I will not try to…”

## Sources for this chapter

All official links in the sections above, plus:

- Covington, Adams & Sargin (2016), [Deep Neural Networks for YouTube Recommendations](https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/)
- Koren, Bell & Volinsky (2009), [doi:10.1109/MC.2009.263](https://doi.org/10.1109/MC.2009.263)
- Liu et al. (2022), [arXiv:2209.07663](https://arxiv.org/abs/2209.07663)
- [xai-org/x-algorithm](https://github.com/xai-org/x-algorithm/), [twitter/the-algorithm](https://github.com/twitter/the-algorithm) (historical)

Checked 20 Nov 2026 (Europe/London).
