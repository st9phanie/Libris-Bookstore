// lib/getUserId.ts
import { createClient } from "@/utils/supabase/server";

export async function getUserId(): Promise<string | null> {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user?.id) {
        return null;
    }

    return data.user.id;
}
