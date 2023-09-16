import { defineCollection, z } from 'astro:content';
const Thing = z.object({
    title: z.string(),
    link: z.string(),
    linkName: z.string(),
    video: z.string()
})

export type ThingSchema = z.infer<typeof Thing>;
const thingsMatterMostCollection = defineCollection({
    type: "content",
    schema: Thing
});
const stuffType = z.enum(["xs", "sm", "lg", "xl", "md"]);
export type StuffType = z.infer<typeof stuffType>
const stuffsIKnowCollection = defineCollection({
    type: "data",
    schema: ({ image }) => z.array(z.object({
        name: z.string(),
        link: z.string(),
        logo: image(),
        imgDes: z.string(),
        type: stuffType
    }))
});

const extraInfo = z.object({
    title: z.string(),
    info: z.string(),
    icon: z.string()
});
export type ExtraInfo = z.infer<typeof extraInfo>
const Work = z.object({
    name: z.string(),
    description: z.string(),
    img: z.string(),
    link: z.string(),
    extraInfos: z.array(extraInfo)
})
const myWorksCollection = defineCollection({
    type: "data",
    schema: z.array(Work)
});
export type Work = z.infer<typeof Work>
export const collections = {
    'thingsMatterMost': thingsMatterMostCollection,
    "stuffsIKnow": stuffsIKnowCollection,
    "myworks": myWorksCollection
};