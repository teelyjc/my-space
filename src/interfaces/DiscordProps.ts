export interface Channel {
  id: string;
  name: string;
  position: number;
}

export interface Member {
  id: string;
  username: string;
  discriminator: string;
  avatar?: any;
  status: string;
  game: {
    name: string;
  }
  avatar_url: string;
}

export interface DiscordProps {
  id: string;
  name: string;
  instant_invite: string;
  channels: Channel[];
  members: Member[];
  presence_count: number;
}