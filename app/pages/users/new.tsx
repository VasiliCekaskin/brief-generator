/* eslint-disable react/jsx-key */
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Form, Field } from "react-final-form";

const New: NextPage = () => {
  const router = useRouter();

  const onSubmit = async (values) => {
    const response = await axios.post("/api/users/new", values);

    if (response.status === 403) {
      router.push("/403");
    }
  };

  return (
    <div className="pt-24 py-36 flex flex-col space-y-12 items-center bg-orange-50">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <h2 className="font-bold py-4 self-center">
              Neuen Account erstellen
            </h2>

            <div className="flex flex-col">
              <label>First Name</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email Adresse"
              />
            </div>

            <div className="flex flex-col">
              <label>Passwort</label>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Passwort"
              />
            </div>

            <div className="flex flex-col">
              <label>Passwort wiederholen</label>
              <Field
                name="passwordRepeat"
                component="input"
                type="password"
                placeholder="Passwort wiederholen"
              />
            </div>

            <button type="submit">Registrieren</button>
          </form>
        )}
      />
    </div>
  );
};

export default New;
