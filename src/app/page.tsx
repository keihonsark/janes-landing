"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import styles from "./page.module.css";
import {
  IconPhone,
  IconShield,
  IconStethoscope,
  IconUserCheck,
  IconFileText,
  IconStar,
  IconLock,
  IconHeart,
  IconMessageCircle,
  IconBrain,
  IconUtensils,
  IconPill,
  IconCar,
  IconMoon,
  IconActivity,
  IconHome,
  IconGoogleG,
  IconShieldBadge,
  IconCheckCircle,
} from "./icons";

function FiveStars({ size = 16 }: { size?: number }) {
  return (
    <>
      <IconStar size={size} />
      <IconStar size={size} />
      <IconStar size={size} />
      <IconStar size={size} />
      <IconStar size={size} />
    </>
  );
}

export default function Home() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [whoNeedsCare, setWhoNeedsCare] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("sending");
    try {
      const res = await fetch(
        "https://api.base44.app/api/apps/69bc76820f0f302a091bb2cd/functions/receiveExternalLead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            phone,
            whoNeedsCare,
            message,
          }),
        }
      );
      if (!res.ok) throw new Error("Failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Image
            src="/images/Janes Home Care Logo_Primary.png"
            alt="Jane's Home Care"
            width={202}
            height={52}
            className={styles.logo}
            priority
          />
          <a href="tel:5592962189" className={styles.callButton}>
            <span className={styles.callButtonIcon}>
              <IconPhone size={16} />
            </span>
            (559) 296-2189
          </a>
        </div>
        <div className={styles.trustBar}>
          <div className={styles.trustBarInner}>
            <span className={styles.trustBarStars}>
              <FiveStars size={11} />
            </span>
            5.0 on Google &middot; Licensed &amp; Insured &middot; Nurse
            Practitioner Oversight &middot; Care Begins Within 24 Hours
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.badge}>
              Serving Fresno, Clovis &amp; Surrounding Areas
            </span>
            <h1 className={styles.heroH1}>
              Trusted Home Care in Fresno —<br />
              Care Starts Within 24 Hours
            </h1>
            <p className={styles.heroSub}>
              Compassionate in-home care for your loved one, overseen by a
              licensed Nurse Practitioner. No contracts. Background-checked
              caregivers.
            </p>

            {/* FORM */}
            <div className={styles.formCard} id="form">
              {formState === "success" ? (
                <div className={styles.thankYou}>
                  <h3>Thank you, {firstName}!</h3>
                  <p>
                    We&apos;ll call you within 2 hours. If you need immediate
                    help, call us at{" "}
                    <a href="tel:5592962189" style={{ fontWeight: 700 }}>
                      (559) 296-2189
                    </a>
                    .
                  </p>
                </div>
              ) : formState === "error" ? (
                <div className={styles.errorMsg}>
                  <p>
                    Something went wrong. Please call us directly at{" "}
                    <a href="tel:5592962189">(559) 296-2189</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className={styles.formTitle}>
                    Get a Free Callback Today
                  </h2>
                  <p className={styles.formSubtext}>
                    We&apos;ll call you within 2 hours. No commitment, no
                    pressure.
                  </p>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="First Name *"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <select
                      value={whoNeedsCare}
                      onChange={(e) => setWhoNeedsCare(e.target.value)}
                    >
                      <option value="">Who needs care?</option>
                      <option value="My Parent">My Parent</option>
                      <option value="My Spouse">My Spouse</option>
                      <option value="Myself">Myself</option>
                      <option value="Someone Else">Someone Else</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <textarea
                      placeholder="Tell us a little about what you need help with..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={formState === "sending"}
                  >
                    {formState === "sending"
                      ? "Sending..."
                      : "Request My Free Call →"}
                  </button>
                  <p className={styles.formPrivacy}>
                    <IconLock size={13} /> Your information is private and never
                    shared
                  </p>
                </form>
              )}
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageWrap}>
              <Image
                src="/images/In-home-care-fresno-caregiver.jpg"
                alt="Compassionate in-home caregiver in Fresno helping a senior"
                fill
                className={styles.heroImage}
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className={styles.floatingBadge}>
                Care can begin within 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES ROW */}
      <section className={styles.trustBadgesRow}>
        <div className={styles.trustBadgesInner}>
          <span className={styles.trustBadgePill}>
            <IconGoogleG size={18} />
            <span className={styles.trustBadgeStars}>
              <FiveStars size={14} />
            </span>
            <span className={styles.trustBadgeText}>5.0 on Google</span>
          </span>
          <span className={styles.trustBadgePill}>
            <IconShieldBadge size={18} />
            <span className={styles.trustBadgeText}>Licensed by CA DHCS</span>
          </span>
          <span className={styles.trustBadgePill}>
            <IconCheckCircle size={18} />
            <span className={styles.trustBadgeText}>Bonded &amp; Insured</span>
          </span>
        </div>
      </section>

      {/* TRUST BAR SECTION */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          {[
            {
              icon: <IconShield size={28} />,
              label: "Licensed & Insured Agency",
              desc: "Fully licensed home care agency in the state of California",
            },
            {
              icon: <IconStethoscope size={28} />,
              label: "Nurse Practitioner Oversight",
              desc: "Every care plan reviewed by a licensed FNP-C",
            },
            {
              icon: <IconUserCheck size={28} />,
              label: "Background-Checked Caregivers",
              desc: "Thorough screening for every caregiver on our team",
            },
            {
              icon: <IconFileText size={28} />,
              label: "No Contracts Required",
              desc: "Flexible care on your terms — cancel anytime",
            },
          ].map((item) => (
            <div key={item.label} className={styles.trustItem}>
              <span className={styles.trustIcon}>{item.icon}</span>
              <span className={styles.trustLabel}>{item.label}</span>
              <span className={styles.trustDesc}>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* JESSICA SECTION */}
      <section className={styles.jessicaSection}>
        <div className={styles.jessicaInner}>
          <div className={styles.jessicaImageWrap}>
            <Image
              src="/images/jessica-headshot.png"
              alt="Jessica Cassidy, FNP-C — Care Director at Jane's Home Care"
              width={400}
              height={500}
              className={styles.jessicaImage}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div className={styles.jessicaContent}>
            <p className={styles.sectionLabel}>Meet Your Care Director</p>
            <h2>Care Overseen by a Licensed Nurse Practitioner</h2>
            <p>
              Currently practicing as a Nurse Practitioner in neurosurgery,
              Jessica Cassidy, FNP-C brings a level of clinical precision that
              most home care agencies simply cannot offer. Every care plan at
              Jane&apos;s is personally reviewed by Jessica — ensuring your loved
              one receives medically-informed, compassionate care from day one.
            </p>
            <div className={styles.credentialBadges}>
              <span className={styles.credentialPill}>FNP-C Licensed</span>
              <span className={styles.credentialPill}>
                15+ Years Experience
              </span>
              <span className={styles.credentialPill}>Neurosurgery NP</span>
            </div>
            <a href="#form" className={styles.ctaButton}>
              Talk to Our Team →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <h2>What Fresno Families Are Saying</h2>
        <div className={styles.testimonialGrid}>
          {[
            {
              text: "Jane\u2019s Home Care gave us peace of mind when we needed it most. The caregiver they matched with my mother was patient, kind, and consistent.",
              author: "The Rivera Family, Fresno",
            },
            {
              text: "We were overwhelmed trying to care for Dad after his surgery. Jane\u2019s Home Care stepped in within 24 hours and made the recovery so much easier.",
              author: "The Nguyen Family, Clovis",
            },
            {
              text: "What sets them apart is Jessica\u2019s clinical background. Knowing a Nurse Practitioner is overseeing my mom\u2019s care makes all the difference.",
              author: "The Park Family, Madera",
            },
          ].map((t) => (
            <div key={t.author} className={styles.testimonialCard}>
              <div className={styles.stars}>
                <FiveStars size={18} />
              </div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <span className={styles.testimonialAuthor}>
                — {t.author}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services}>
        <h2>How We Can Help</h2>
        <div className={styles.servicesGrid}>
          {[
            { icon: <IconHeart size={26} />, label: "Personal Care" },
            { icon: <IconMessageCircle size={26} />, label: "Companionship" },
            {
              icon: <IconBrain size={26} />,
              label: "Memory & Dementia Support",
            },
            { icon: <IconUtensils size={26} />, label: "Meal Preparation" },
            { icon: <IconPill size={26} />, label: "Medication Reminders" },
            { icon: <IconCar size={26} />, label: "Transportation" },
            {
              icon: <IconMoon size={26} />,
              label: "Overnight & 24-Hour Care",
            },
            {
              icon: <IconActivity size={26} />,
              label: "Post-Surgery Recovery",
            },
            {
              icon: <IconHome size={26} />,
              label: "Independent Living Support",
            },
          ].map((s) => (
            <div key={s.label} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{s.icon}</div>
              <div className={styles.serviceLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <h2>Ready to Talk About Care?</h2>
        <p className={styles.finalCtaSub}>
          Every care journey starts with a conversation. No commitment, no
          pressure — just an honest talk about what your family needs.
        </p>
        <div className={styles.finalCtaButtons}>
          <a href="#form" className={styles.btnPrimary}>
            Request a Free Call →
          </a>
          <a href="tel:5592962189" className={styles.btnSecondary}>
            Call Now: (559) 296-2189
          </a>
        </div>
        <p className={styles.finalCtaSmall}>
          Available 7 days a week · Care can begin within 24 hours
        </p>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerDivider} />
        <div className={styles.footerContent}>
          <Image
            src="/images/Janes Home Care_Logomark_Logomark_Full Color.png"
            alt="Jane's Home Care leaf"
            width={64}
            height={64}
            className={styles.footerLeaf}
          />
          <p className={styles.footerName}>
            Jane&apos;s Home Care · Fresno, CA
          </p>
          <p className={styles.footerContact}>
            care@janeshomecare.com · (559) 296-2189
          </p>
          <p className={styles.footerAreas}>
            Serving Fresno, Clovis, Madera, Sanger, Selma &amp; Surrounding
            Areas
          </p>
          <p className={styles.footerCopy}>
            © 2026 Jane&apos;s Home Care. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
