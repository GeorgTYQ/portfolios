import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Posts } from "./src/app/collections/Posts";
import { Educations } from "@/app/collections/Education";
import { SkillsSet } from "@/app/collections/SkillSet";
import { Experiences } from "@/app/collections/Experience";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  // Define and configure your collections in this array
  collections: [Posts, Educations, Experiences, SkillsSet],
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_USER,
    defaultFromName: "Messaage from Portfolio",
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
});
