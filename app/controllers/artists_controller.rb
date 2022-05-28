class ArtistsController < ApplicationController
before_action :find_artist, only: [:update]
    def index
        render json: Artist.all, status: 202
    end

    def create
        artist = Artist.create!(artist_params)
        session[:artist_id] = artist.id
        render json: artist, status: :created
    end

    def update
        @artist.update(artist_params)
        render json: @artist, status: :accepted
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

    def find_artist
        @artist = Artist.find(params[:id])
    end

    def artist_params
        params.permit(:username, :password, :password_confirmation, :profile_img, :song1, :song2, :song3, :bio)
    end
end
