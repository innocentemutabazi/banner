import { FunctionComponent } from "react";
import styles from "./MakeYourREADME.module.css";

const MakeYourREADME: FunctionComponent = () => {
  return (
    <div className={styles.makeYourReadme}>
      <header className={styles.frameParent}>
        <section className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.hiImInnocenteWrapper}>
              <h1 className={styles.hiImInnocenteContainer}>
                <p className={styles.hiIm}>{`Hi! I’m `}</p>
                <p className={styles.hiIm}>Innocente.</p>
              </h1>
            </div>
            <img
              className={styles.beveledCone1Icon}
              loading="lazy"
              alt=""
              src="/beveledcone-1@2x.png"
            />
          </div>
          <div className={styles.titleBackground} />
        </section>
        <section className={styles.aspiringFullStackDeveloperParent}>
          <b className={styles.aspiringFullStackContainer}>
            <p className={styles.hiIm}>
              <span>Aspiring</span>
              <span className={styles.span}>{` `}</span>
            </p>
            <p className={styles.fullStackDeveloper}>Full stack Developer</p>
          </b>
          <div className={styles.withAPassion}>
            with a passion for solving problems that involve creativity and
            innovation
          </div>
        </section>
        <img
          className={styles.roundTriangleChain4Icon}
          alt=""
          src="/roundtrianglechain-4@2x.png"
        />
      </header>
      <div className={styles.beveledCone2Parent}>
        <img
          className={styles.beveledCone2Icon}
          alt=""
          src="/beveledcone-2@2x.png"
        />
        <img
          className={styles.roundTriangleChain2Icon}
          loading="lazy"
          alt=""
          src="/roundtrianglechain-2@2x.png"
        />
      </div>
      <div className={styles.usageInstructionsParent}>
        <img
          className={styles.usageInstructionsIcon}
          alt=""
          src="/usage-instructions@2x.png"
        />
        <img className={styles.github11Icon} alt="" src="/github1-1@2x.png" />
        <img
          className={styles.beveledCone3Icon}
          loading="lazy"
          alt=""
          src="/beveledcone-3@2x.png"
        />
        <img
          className={styles.roundTriangleChain1Icon}
          loading="lazy"
          alt=""
          src="/roundtrianglechain-1@2x.png"
        />
        <img
          className={styles.blackPrettyAndBeautifulSofIcon}
          alt=""
          src="/blackprettyandbeautifulsoftwaredeveloppergirlcrossingarms-1-1@2x.png"
        />
      </div>
    </div>
  );
};

export default MakeYourREADME;
