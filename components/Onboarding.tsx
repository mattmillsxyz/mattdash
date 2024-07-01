import { useEffect, useState } from 'react';
import { Button, Input, Progress } from '@nextui-org/react';
import cx from 'classnames';

import CountrySelector from '@/components/CountrySelector';
import styles from './Onboarding.module.scss';

function Onboarding() {
  const [step, setStep] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    console.log('DEBUG: STEP: ', step);
    if (step > 0) {
      const complete = (step / 4) * 100;
      console.log('DEBUG: complete: ', step, complete);
      setProgress(complete);
    }
  }, [step]);

  const isValidName = () => {
    if (name && name.length) return true;
    return false;
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <>
          <h1 className="text-success mb-1">HELLO!</h1>
          <p>Before you start, we need to setup your profile.</p>
          <Button className="mt-10" color="success" size="lg" onClick={() => setStep(step + 1)}>
            LET&apos;S GO
          </Button>
        </>
      );
    } else if (step === 1) {
      return (
        <>
          <h4 className="text-2xl font-bold mb-10">What is your name?</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(step + 1);
            }}
          >
            <Input
              type="text"
              label="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="mt-10"
              color="success"
              size="lg"
              disabled={!isValidName()}
            >
              CONTINUE
            </Button>
          </form>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <h4 className="text-2xl font-bold mb-10">Where are you from?</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(step + 1);
            }}
          >
            <CountrySelector />
            <Button
              type="submit"
              className="mt-10"
              color="success"
              size="lg"
              disabled={!country.length}
            >
              CONTINUE
            </Button>
          </form>
        </>
      );
    }
  };

  return (
    <div className={cx(styles.onboarding, 'min-h-screen')}>
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Progress size="sm" color="success" aria-label="Onboarding progress" value={progress} />
      </div>
      <div className={styles.onboardingForm}>{renderStep()}</div>
      <div>
        {step > 0 && (
          <Button
            className="mt-5"
            variant="light"
            color="warning"
            onClick={() => setStep(step - 1)}
          >
            &laquo; BACK
          </Button>
        )}
      </div>
    </div>
  );
}

export default Onboarding;
