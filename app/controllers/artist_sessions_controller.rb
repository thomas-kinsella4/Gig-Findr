class ArtistSessionsController < ApplicationController
    
    def create
        artist = Artist.find_by(username: params[:username])
        if artist&.authenticate(params[:password])
            session[:artist_id] = artist.id
            render json: artist, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

end
