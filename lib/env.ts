import { z } from 'zod'

const envSchema = z.object({
	EXPO_PUBLIC_API_BASE_URL: z.string().url(),
	NODE_ENV: z
		.enum(['test', 'development', 'production'])
		.default('development'),
	EXPO_PUBLIC_STORAGE_KEY_THEME: z.string().min(1),
})

const env = envSchema.safeParse(process.env)
if (!env.success) {
	throw new Error('Failed to parse environment.')
}

type EnvSchemaType = z.infer<typeof envSchema>

declare global {
	namespace NodeJS {
		interface ProcessEnv extends EnvSchemaType {}
	}
}
