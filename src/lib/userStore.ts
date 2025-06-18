import { Store } from '@tanstack/react-store'
import { supabase } from '../db/SupabaseClinet'
import type { Session, User } from '@supabase/supabase-js'
import type { City, Interes } from './types'

type AuthState = {
    user: User | null
    session: Session | null
    loading: boolean
    error: string | null
}

export const userStore = new Store<AuthState>({
    user: null,
    session: null,
    loading: true,
    error: null,
})

export async function signInWithEmail(email: string, password: string) {
    userStore.setState((prev) => ({ ...prev, error: null }))
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
        userStore.setState((prev) => ({ ...prev, error: error.message }))
        return
    }
    userStore.setState((prev) => ({
        ...prev,
        user: data.user,
        session: data.session,
        loading: false,
        error: null,
    }))
}

export async function signUpWithEmail(email: string, password: string, name: string, interests?: Array<Interes>, homeAirePort?: City) {
    userStore.setState((prev) => ({ ...prev, error: null }))
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                interests,
                homeAirePort
            },
        },
    })
    if (error) {
        userStore.setState((prev) => ({ ...prev, error: error.message }))
        return
    }
    userStore.setState((prev) => ({
        ...prev,
        user: data.user,
        session: data.session,
        loading: false,
        error: null,
    }))
}

export async function signOut() {
    userStore.setState((prev) => ({ ...prev, loading: true, error: null }))
    const { error } = await supabase.auth.signOut()
    if (error) {
        userStore.setState((prev) => ({ ...prev, loading: false, error: error.message }))
        return
    }
    userStore.setState((prev) => ({
        ...prev,
        user: null,
        session: null,
        loading: false,
        error: null,
    }))
}

supabase.auth.onAuthStateChange((_event, session) => {
    userStore.setState((prev) => ({
        ...prev,
        user: session?.user ?? null,
        session: session ?? null,
        loading: false,
        error: null,
    }))
})
