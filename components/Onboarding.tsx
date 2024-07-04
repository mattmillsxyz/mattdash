import { useEffect, useState } from 'react';
import { Button, Input, Progress, DateInput } from '@nextui-org/react';
import { CalendarDate, getLocalTimeZone } from '@internationalized/date';
import cx from 'classnames';

import CountrySelector from '@/components/CountrySelector';
import styles from './Onboarding.module.scss';

function Onboarding() {
  const [step, setStep] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [country, setCountry] = useState<string | undefined>(undefined);
  const [birthDate, setBirthDate] = useState<CalendarDate>();
  const [validBirthDate, setValidBirthDate] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const currYear = new Date().getFullYear();
    let value = false;

    if (birthDate) {
      if (
        birthDate.day >= 1 &&
        birthDate.day <= 31 &&
        birthDate.month >= 1 &&
        birthDate.month <= 12 &&
        birthDate.year > 1900 &&
        birthDate.year <= currYear - 3
      ) {
        value = true;
      }
    }

    setValidBirthDate(value);
  }, [birthDate]);

  useEffect(() => {
    if (step > 0) {
      const complete = (step / 4) * 100;
      setProgress(complete);
    }
  }, [step]);

  const isValidName = () => {
    if (name && name.length) return true;
    return false;
  };

  const isBirthDateComplete = () => {
    if (!birthDate) return false;
    if (birthDate.day >= 1 && birthDate.month >= 1 && birthDate.year >= 1000) return true;
    return false;
  };

  const completeOnboarding = () => {
    console.log('DEBUG: ONBOARDING COMPLETE: ', {
      name,
      birthDate: `${birthDate?.month}/${birthDate?.day}/${birthDate?.year}`,
      country,
    });
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <>
          <h1 className="text-success mb-1">HELLO!</h1>
          <p>Before you start, we need to setup your player profile.</p>
          <Button
            className="mt-10 font-bold"
            color="success"
            size="lg"
            onClick={() => setStep(step + 1)}
          >
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
              className="mt-10 font-bold"
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
          <h4 className="text-2xl font-bold mb-10">What is your birth date?</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(step + 1);
            }}
          >
            <DateInput
              className="text-left"
              label="Birth Date"
              value={birthDate}
              isInvalid={isBirthDateComplete() && !validBirthDate}
              errorMessage={(value) => {
                if (value.isInvalid) {
                  return 'Please enter a valid birth date.';
                }
              }}
              onChange={(value: CalendarDate) => {
                setBirthDate(value);
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  if (isBirthDateComplete() && validBirthDate) {
                    setStep(step + 1);
                  }
                }
              }}
            />
            <Button
              type="submit"
              className="mt-10 font-bold"
              color="success"
              size="lg"
              disabled={!validBirthDate}
            >
              CONTINUE
            </Button>
          </form>
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <h4 className="text-2xl font-bold mb-10">Where are you from?</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(step + 1);
            }}
          >
            <CountrySelector
              selectedCountry={country}
              onCountryChange={(value) => setCountry(value)}
            />
            <Button
              type="submit"
              className="mt-10 font-bold"
              color="success"
              size="lg"
              disabled={!country?.length}
            >
              CONTINUE
            </Button>
          </form>
        </>
      );
    } else if (step === 4) {
      return (
        <>
          <h1 className="text-success mb-1">GREAT JOB!</h1>
          <p>Your player profile is complete.</p>
          <Button
            className="mt-10 font-bold"
            color="success"
            size="lg"
            onClick={completeOnboarding}
          >
            GET STARTED
          </Button>
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
            className="mt-5 font-bold"
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
