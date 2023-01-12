import styles from "./styles.module.scss";
import Link from "next/link";

const StoryList = ({ stories }: any) => (
  <div className={styles.list}>
    {stories.map((story: any): any => (
      <div className={styles.story} key={story.id}>
        <h2 className={styles.story__title}>
          <a href={story.url}>{story.title}</a>
        </h2>
        <div className={styles.story__details}>
          <span>{story.points || 0} points</span>
          <Link href={`/story?id=${story.id}`}>
            <a>{story.comments_count} comments</a>
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default StoryList;
