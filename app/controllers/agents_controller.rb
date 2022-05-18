class AgentsController < ApplicationController

    #signup
    def create
        agent = Agent.create!(agent_params)
        session[:agent_id] = agent.id
        render json: agent, status: :created
    end

    def show
        artist = Artist.find_by(id: session[:artist_id])
        if artist
            render json: artist
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private 

    def agent_params
        params.permit(:username, :password, :password_confirmation)
    end

end
