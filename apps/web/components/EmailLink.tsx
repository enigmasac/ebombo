"use client";

import { useState, useEffect } from "react";

export default function EmailLink({
  user,
  domain,
  className,
}: {
  user: string;
  domain: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) return null;

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
