class ArtistsController < ApplicationController

    def index
        render json: Artist.all, status: 202
    end

    def create
        artist = Artist.create!(artist_params)
        session[:artist_id] = artist.id
        render json: artist, status: :created
    end

    def show
        artist = Artist.find_by(id: session[:artist_id])
        if artist
            render json: artist
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def find
        artist = Artist.find(params[:id])
        render json: artist, status: :ok
    end

    private 

    def artist_params
        params.permit(:username, :password, :password_confirmation)
    end
end
