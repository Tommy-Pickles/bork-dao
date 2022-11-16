import { objectKeys } from "../helpers/arrays";

type AppEnv = "staging" | "production";

interface Vars {
  NEXT_PUBLIC_INFURA_ID: string;
  NEXT_PUBLIC_APP_ENV: AppEnv;
}

const vars: Vars = {
  NEXT_PUBLIC_INFURA_ID: process.env.NEXT_PUBLIC_INFURA_ID as string,
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV as AppEnv,
};

const assertVars = () => {
  const publicKeys = objectKeys(vars).filter((key) => {
    const t = key as string;
    return t.includes("NEXT_PUBLIC");
  });
  const privateKeys = objectKeys(vars).filter((key) => {
    return !publicKeys.includes(key);
  });

  let keysToValidate = publicKeys;
  if (typeof window === "undefined") {
    keysToValidate = privateKeys;
  }

  keysToValidate.forEach((key) => {
    if (vars[key] === undefined) {
      // alert(`You are missing environment variable: ${key}`)
      throw new Error(`Missing environment variable: ${key}`);
    }
  });
};
assertVars();

export { vars };
